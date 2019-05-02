# Copyright 2017 by  Sunita Nayak <nayak.sunita@gmail.com>

import cv2

# Read the foreground image with alpha channel
foreGroundImage = cv2.imread("C:\\Users\\Manthika\\Desktop\\opencvtest\\tattoo.png", -1)
# Read background image
background = cv2.imread("C:\\Users\\Manthika\\Desktop\\opencvtest\\backGround.jpg")
dim = (background.shape[1], background.shape[0])
foreGroundImage = cv2.resize(foreGroundImage, dim)

# Split png foreground image
b,g,r,a = cv2.split(foreGroundImage)

# Save the foregroung RGB content into a single object
foreground = cv2.merge((b,g,r))

# Save the alpha information into a single Mat
alpha = cv2.merge((a,a,a))


# background = cv2.resize(background, dim, interpolation = cv2.INTER_AREA)

# Convert uint8 to float
foreground = foreground.astype(float)
background = background.astype(float)
alpha = alpha.astype(float)/255

# Perform alpha blending
foreground = cv2.multiply(alpha, foreground)
beta = 1.0 - alpha
background = cv2.multiply(beta, background)
outImage = cv2.add(foreground, background)

# cv2.imwrite("outImgPy.png", outImage)

cv2.imshow("outImg", outImage/255)
cv2.waitKey(0)