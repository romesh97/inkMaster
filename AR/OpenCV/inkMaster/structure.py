import cv2 as cv2
import numpy as np
import imutils

def multiScaleTemplateMatching(templates[], frame, tHeight, tWidth):

def alphaBlending(frame, startX, startY, endX, endY):

def homography(startX, startY, endX, endY, alphaOut):

def main():
    template1 = cv2.imread("path1")
    template2 = cv2.imread("path2")
    templates = [template1, template2]

    for i in range(len(templates)):
        templates[i] = cv2.cvtColor(templates[i], cv2.COLOR_BGR2GRAY)
        templates[i] = cv2.Canny(templates[i], 50, 140)
        templates[i] = cv2.GaussianBlur(templates[i],(5,5),0)
        templates[i] = imutils.resize(templates[i], width=50)

    (tH, tW) = templates[0].shape[:2]
    cap = cv2.VideoCapture(0)

    while ret:

        # read the frame
        ret, frame = cap.read()

        # loop over the scales of the image
        multiScaleTemplateMatching(templates, frame, tH, tW)

        #alpha blend the tattoo over the target
        alphaBlending(frame, startX, startY, endX, endY)

        #paste the alpha blended image on the frame
        homography(startX, startY, endX, endY, alphaOut):

        cv2.imshow("Final", im_dst)

        if cv2.waitKey(1) == 27:
            break

    cv2.destroyAllWindows()
    cap.release()


if __name__ == "__main__":
    main()