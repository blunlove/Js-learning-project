# -*-coding:utf8-*-

import requests
import json
import MySQLdb
from multiprocessing.dummy import Pool as ThreadPool
import sys
import datetime
import time
import random

def datetime_to_timestamp_in_milliseconds(d):
    current_milli_time = lambda: int(round(time.time() * 1000))
    return current_milli_time()


reload(sys)

sys.setdefaultencoding('utf-8')

urls = []

head = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'Referer': 'http://space.bilibili.com/873981/',
    'Origin': 'http://space.bilibili.com',
    'Host': 'space.bilibili.com',
    'AlexaToolbar-ALX_NS_PH': 'AlexaToolbar/alx-4.0',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,ja;q=0.4',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
}

script,table = sys.argv

def getIndex():
    try:
        conn = MySQLdb.connect(host='localhost', user='root', passwd='root', port=3306, charset='utf8')
        cur = conn.cursor()
        # cur.execute('create database if not exists python')
        conn.select_db('python')
        cur.execute('SELECT * from '+table)
        results = cur.fetchall()
        conn.close();
        return results[cur.rowcount-1][0]
    except MySQLdb.Error, e:
        conn.close();
        print "Mysql Error %d: %s" % (e.args[0], e.args[1])

ip = []
file = open(table+'.txt','r')
for line in file:
    ip.append(line[:-1])
file.close()
ip.append('')
urlIndex = getIndex()
time1 = time.time()
for i in range(urlIndex+1, urlIndex+100001):
    url = 'http://space.bilibili.com/ajax/member/GetInfo?mid=' + str(i)
    urls.append(url)

# s = requests.Session()

# proxies = {
#    'http':'http://118.123.245.145:3128' ,
# }


def getsource(url,randomIp):
    payload = {
        '_': datetime_to_timestamp_in_milliseconds(datetime.datetime.now()),
        'mid': url.replace('http://space.bilibili.com/ajax/member/GetInfo?mid=', '')
    }

    jscontent = requests.post('http://space.bilibili.com/ajax/member/GetInfo',proxies={'http':randomIp},headers=head,timeout=5,data=payload).content
    time2 = time.time()
    jsDict = json.loads(jscontent)
    if jsDict['status'] == True:
        jsData = jsDict.get('data')
        mid = jsData.get('mid')
        name = jsData.get('name')
        sex = jsData.get('sex')
        birthday = jsData.get('birthday')
        place = jsData.get('place')
        print "Succeed: " + mid + "\t" + str(time2 - time1)
        if name == '长点胸吧姑娘' or name == 'Rachelawaits' or name == '你叫我名字就好' or name == '不想说话':
            file = open('result.txt','a')
            file.write(name)
            file.write('\n')
            file.write(mid)
            file.write('\n')
            file.close()
        try:
            conn = MySQLdb.connect(host='localhost', user='root', passwd='root', port=3306, charset='utf8')
            cur = conn.cursor()
            # cur.execute('create database if not exists python')
            conn.select_db('python')
            cur.execute('INSERT INTO '+table+' VALUES (%s,%s,%s,%s,%s,%s)',
                        [mid, mid, name, sex,birthday, place])
        except MySQLdb.Error, e:
            print "Mysql Error %d: %s" % (e.args[0], e.args[1])
    else:
        print "Error: " + url

index = 0
while index < 100000:
    try:
        num = random.randint(0,len(ip)-1)
        getsource(urls[index],ip[num])
        index = index + 1
    except Exception:
        pass
# pool = ThreadPool(10)
# try:
#     results = pool.map(getsource, urls)
# except Exception:
#     print 'ConnectionError'
#     time.sleep(300)
#     results = pool.map(getsource, urls)

# pool.close()
# pool.join()