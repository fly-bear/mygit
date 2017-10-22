from wordcloud import WordCloud,ImageColorGenerator
import re
import matplotlib.pyplot as plt
import jieba

filename='东木'
savename='东木'
back='cam'
f=open(r'D:\Personal\Desktop\各种python小项目\QQ空间'+'\\'+filename+'.html','r',encoding='utf-8')
a=f.read()
f.close()
b=r'<pre style="display:inline;" class="content">[\s\S]*?</pre>'
c=re.compile(b)
d=re.findall(c,a)
words=''
words_list=[]
for e in d:
    e=e.replace('<pre style="display:inline;" class="content">','')
    e=e.replace('</pre>','')
    uu=re.compile(r'<.*?>')
    lks=re.findall(uu, e)
    if len(lks)!=0:
        for lk in lks:
            e=e.replace(lk,'')
    temp=jieba.cut(e,cut_all=True)
    words_list.append(temp)
    words=words+','+','.join(temp)
#     print(e)
#     print('-'*100)11
backgroud_Image = plt.imread(r'd:/personal/desktop/clould/'+back+'.jpg')
wordcloud = WordCloud(background_color="white", margin=2,max_words=800,max_font_size=130,font_path='simsun.ttc',random_state = 30,mask=backgroud_Image).generate_from_text(words)
image_colors = ImageColorGenerator(backgroud_Image)
wordcloud.recolor(color_func = image_colors)
wordcloud.to_file(r'd:/personal/desktop/clould/clould-'+savename+'.jpg')
plt.imshow(wordcloud)
plt.axis("off")
plt.show()