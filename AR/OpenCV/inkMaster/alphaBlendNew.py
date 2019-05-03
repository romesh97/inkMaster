import cv2

# Read the foreground image with alpha channel
# foreGroundImage = cv2.imread("C:\\Users\\Manthika\\Desktop\\opencvtest\\tattoo2.png", -1)
# Read background image
image = cv2.imread("C:\\Users\\Manthika\\Desktop\\opencvtest\\backGround.jpg")



cropped = image[70:170, 440:540]
cv2.imshow("cropped", cropped)
cv2.waitKey(0)