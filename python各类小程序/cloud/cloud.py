from wordcloud import WordCloud,ImageColorGenerator
import os,sys
from PIL import Image
import numpy as np

filename = 'word.txt'
savename='result.jpg'
back='back.jpg'
path = os.path.dirname(__file__)+'\\'
f=open(path+filename)
words = f.readline()
f.close()
img = Image.open(path+back) #打开图片
img_array = np.array(img) #将图片装换为数组
wordcloud = WordCloud(background_color="white", margin=2,max_words=800,max_font_size=130,font_path='simsun.ttc',random_state = 30,mask=img_array).generate_from_text(words)
wordcloud.to_file(path+savename)