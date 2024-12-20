import cv2
import numpy as np
from matplotlib import pyplot as plt

print ("Starting")
img = cv2.imread('newrice\IMG20241215011701.jpg',0)#load in greyscale mode

#convert into binary
ret,binary = cv2.threshold(img,127,255,cv2.THRESH_BINARY)

#averaging filter
kernel = np.ones((5,5),np.float32)/9
dst = cv2.filter2D(binary,-1,kernel)# -1 : depth of the destination image


kernel2 = cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(3,3))

#erosion
erosion = cv2.erode(dst,kernel2,iterations = 1)

#dilation 
dilation = cv2.dilate(erosion,kernel2,iterations = 1)




#edge detection
edges = cv2.Canny(binary,30,130)


### Size detection
try:
    contours, hierarchy = cv2.findContours(erosion, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
except ValueError:
    _, contours, hierarchy = cv2.findContours(erosion, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

print ("No. of rice grains=",len(contours))

for cnt in contours:
	x,y,w,h = cv2.boundingRect(cnt)
	aspect_ratio = float(w)/h
	# if(aspect_ratio<1):
	# 	aspect_ratio=1/aspect_ratio,round(aspect_ratio,2),get_classificaton(aspect_ratio) 
	print ("Height=",round(h*0.030303,3))
   

#plot the images
imgs_row=2
imgs_col=3
plt.subplot(imgs_row,imgs_col,1),plt.imshow(img,'gray')
plt.title("Original image")

plt.subplot(imgs_row,imgs_col,2),plt.imshow(binary,'gray')
plt.title("Binary image")

plt.subplot(imgs_row,imgs_col,3),plt.imshow(dst,'gray')
plt.title("Filtered image")

plt.subplot(imgs_row,imgs_col,1),plt.imshow(erosion,'gray')
plt.title("Eroded image")

plt.subplot(imgs_row,imgs_col,2),plt.imshow(dilation,'gray')
plt.title("Dialated image")

plt.subplot(imgs_row,imgs_col,3),plt.imshow(edges,'gray')
plt.title("Edge detect")

plt.show()

# final one