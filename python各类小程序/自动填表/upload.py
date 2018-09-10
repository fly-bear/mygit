from qiniu import Auth, put_file, etag, urlsafe_base64_encode
from qiniu import BucketManager
import qiniu.config
import random
import requests

def upload_file(filepath):
    access_key = 'AgalBXSUPi_LPe9E4nmQrMkVSD67ttNiu707HRjD'
    secret_key = 'A_PtalvHhaUSovjSMDq9h7FgGIZclvRle3M90KSg'
    # 构建鉴权对象
    q = Auth(access_key, secret_key)
    # 要上传的空间
    bucket_name = 'flybear'
    # 上传到七牛后保存的文件名
    key = filepath
    # 生成上传 Token，可以指定过期时间等
    token = q.upload_token(bucket_name, key, 3600)
    # 要上传文件的本地路径
    localfile = filepath
    ret, info = put_file(token, key, localfile)
    print(info)
    assert ret['key'] == key
    assert ret['hash'] == etag(localfile)

def delete_file():
    access_key = 'AgalBXSUPi_LPe9E4nmQrMkVSD67ttNiu707HRjD'
    secret_key = 'A_PtalvHhaUSovjSMDq9h7FgGIZclvRle3M90KSg'
    #初始化Auth状态
    q = Auth(access_key, secret_key)
    #初始化BucketManager
    bucket = BucketManager(q)
    #你要测试的空间， 并且这个key在你空间中存在
    bucket_name = 'flybear'
    key = 'test.xlsx'
    #删除bucket_name 中的文件 key
    ret, info = bucket.delete(bucket_name, key)
    print(info)
    assert ret == {}

def get_file(filename):
    file=requests.get('http://opxukhofd.bkt.clouddn.com/'+filename+'?v='+str(random.randint(10000,55555))).content
    return  file

if __name__=="__main__":
    upload_file('20171228.xlsx')
