import json

def jx(jsstr):
    use=json.loads(jsstr)
    for each in use:
        if isinstance(each,dict):
            for value in each.values():
                print(value,end='\t')
                print()
        elif isinstance(each,str):
            print(each)
