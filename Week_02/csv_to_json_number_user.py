
import csv
import random
import json
import datetime

time_in = {}
time_out = {}
user_log = {}
user_count = {}
ip = {}
login_log = {}

def ceil_time(tm):
    discard = datetime.timedelta(minutes=tm.minute % 15,
                             seconds=tm.second,
                             microseconds=tm.microsecond)
    tm -= discard 
    if discard != datetime.timedelta(minutes=0):
        tm += datetime.timedelta(minutes=15)
    return tm

def init(time):
    time_str = time.strftime('%Y-%m-%d %H:%M:%S')
    if time_str not in user_count.keys():
        if not user_count:
            user_count[time_str] = 0
            ip[time_str] = {'ipv4':0, 'ipv6':0, 'dualstack':0}
            login_log[time_str] = {'login':0, 'logout':0}
        else:
            last_str = sorted(user_count)[-1]
            last_time = datetime.datetime.strptime(last_str, '%Y-%m-%d %H:%M:%S')
            while last_time < time:
                last_time = last_time + datetime.timedelta(minutes=15)
                last_time_str = last_time.strftime('%Y-%m-%d %H:%M:%S')
                user_count[last_time_str] = user_count[last_str]
                ip[last_time_str] = dict(ip[last_str])
                login_log[time_str] = {'login':0, 'logout':0}
                last_str = last_time_str



def count_log(time, user, ipv4, ipv6, is_login):
    time_str = time.strftime('%Y-%m-%d %H:%M:%S')
    
    ##### 1 #####
    if user not in user_log.keys():
        user_count[time_str] += is_login
        user_log[user] = 0
    user_log[user] += is_login
    if user_log[user] == 0 :
        user_count[time_str] += is_login
        user_log.pop(user)
        
    ##### 2 #####
    ipstack = ip[time_str]
    if ipv4 == '-':
        ipstack['ipv6'] += is_login
    elif ipv6 == '-':
        ipstack['ipv4'] += is_login
    else:
        ipstack['dualstack'] += is_login
    ip[time_str] = ipstack

    if is_login == 1 :
        login_log[time_str]['login'] += 1
    else:
        login_log[time_str]['logout'] += 1

csvfile = open('login-20170102-anon.csv', 'r')
ipjsonfile = open('number_ip.json', 'w')
userjsonfile = open('number_user.json', 'w')
loginjsonfile = open('number_login.json', 'w')
reader = csv.DictReader(csvfile,  delimiter=' ', fieldnames=['login_session_id', 'login_timestamp', 
                                                    'user', 'logout_timestamp', 'mac_address', 'ipv4', 
                                                    'ipv6', 'agent_ip', 'agent_type', 'via_ip', 'ipv4_byte_in', 
                                                    'ipv4_byte_out', 'ipv4_pkt_in', 'ipv4_pkt_out', 'ipv6_byte_in', 
                                                    'ipv6_byte_out', 'ipv6_pkt_in', 'ipv6_pkt_out', 'last_seen_timestamp'
                                                ])

for row in reader:
    time = datetime.datetime.utcfromtimestamp(int(row['login_timestamp'])/1000.0)
    login_time = ceil_time(time)
    time_temp = login_time.strftime('%Y-%m-%d %H:%M:%S')
    if row['logout_timestamp'] == '-' :
        init(login_time)
        count_log(login_time, row['user'], row['ipv4'], row['ipv6'], 1)
        temp = { 'user':row['user'] }
        time_in[row['login_timestamp']] = temp
    else : 
        time = datetime.datetime.utcfromtimestamp(int(row['logout_timestamp'])/1000.0)
        logout_time = ceil_time(time)
        if row['login_timestamp'] in time_in.keys():
            init(logout_time)
            count_log(logout_time, row['user'], row['ipv4'], row['ipv6'], -1)
            time_in.pop(row['login_timestamp'])
        else :
            temp = { 'user':row['user'] }
            time_out[row['logout_timestamp']] = temp


print(time_in.keys())
print('-------------------------')
print(time_out.keys())



userdata = {}
ipdata = {}
logindata = {}

for key in sorted(user_count):
    ipdata[key] = ip[key]
    userdata[key] = user_count[key]
    logindata[key] = login_log[key]
    
json.dump(userdata, userjsonfile)
json.dump(ipdata, ipjsonfile)
json.dump(logindata, loginjsonfile)
