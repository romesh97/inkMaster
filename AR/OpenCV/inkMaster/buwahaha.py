import cv2 as cv2
import numpy as np
import matplotlib.pyplot as plt
import argparse
import imutils
import glob


def main():


    # windowName = "Something"
    # cv.namedWindow(windowName)
    # cap = cv.VideoCapture(0)
    #
    # if cap.isOpened():
    #     ret, frame = cap.read()
    #     # print(ret)
    #     # print(frame)
    # else:
    #     ret = False
    #
    #
    # while ret:
    #
    #     ret, frame = cap.read()
    #
    #     videoOutput = cv.cvtColor(frame, cv.COLOR_BGR2HSV)
    #
    #     cv.imshow(windowName, videoOutput)
    #     if cv.waitKey(1) == 27:
    #         break
    #
    # cv.destroywindow(windowName)
    #
    # cap.release()

    # construct the argument parser and parse the arguments
    # ap = argparse.ArgumentParser()
    # ap.add_argument("-t", "--template", required=True, help="Path to template image")
    # ap.add_argument("-i", "--images", required=True,
    #                 help="Path to images where template will be matched")
    # ap.add_argument("-v", "--visualize",
    #                 help="Flag indicating whether or not to visualize each iteration")
    # args = vars(ap.parse_args())

    template = cv2.imread("C:\\Users\\Manthika\\Desktop\\opencvtest\\template.jpg")
    template = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
    template = cv2.Canny(template, 50, 200)
    (tH, tW) = template.shape[:2]
    cv2.imshow("Template", template)

    # loop over the images to find the template in
    for imagePath in glob.glob("C:\\Users\\Manthika\\Desktop\\opencvtest\\New folder" + "/*.jpg"):
        # load the image, convert it to grayscale, and initialize the
        # bookkeeping variable to keep track of the matched region
        image = cv2.imread(imagePath)
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        found = None

        # loop over the scales of the image
        for scale in np.linspace(0.2, 1.0, 20)[::-1]:
            # resize the image according to the scale, and keep track
            # of the ratio of the resizing
            resized = imutils.resize(gray, width=int(gray.shape[1] * scale))
            r = gray.shape[1] / float(resized.shape[1])

            # if the resized image is smaller than the template, then break
            # from the loop
            if resized.shape[0] < tH or resized.shape[1] < tW:
                break

            # detect edges in the resized, grayscale image and apply template
            # matching to find the template in the image
            edged = cv2.Canny(resized, 50, 200)
            result = cv2.matchTemplate(edged, template, cv2.TM_CCOEFF)
            (_, maxVal, _, maxLoc) = cv2.minMaxLoc(result)

            # check to see if the iteration should be visualized
            # if args.get("visualize", False):
            #     # draw a bounding box around the detected region
            #     clone = np.dstack([edged, edged, edged])
            #     cv2.rectangle(clone, (maxLoc[0], maxLoc[1]),
            #                   (maxLoc[0] + tW, maxLoc[1] + tH), (0, 0, 255), 2)
            #     cv2.imshow("Visualize", clone)
            #     cv2.waitKey(0)

            # if we have found a new maximum correlation value, then update
            # the bookkeeping variable
            if found is None or maxVal > found[0]:
                found = (maxVal, maxLoc, r)

            # unpack the bookkeeping variable and compute the (x, y) coordinates
            # of the bounding box based on the resized ratio
        print(found)
        if found is None:
            # just show only the frames if the template is not detected
            print('No template detected')
            cv2.imshow("Image", image)
        else:
            (_, maxLoc, r) = found
            (startX, startY) = (int(maxLoc[0] * r), int(maxLoc[1] * r))
            (endX, endY) = (int((maxLoc[0] + tW) * r), int((maxLoc[1] + tH) * r))

            # draw a bounding box around the detected result and display the image
            cv2.rectangle(image, (startX, startY), (endX, endY), (0, 0, 255), 2)
            print('Original Dimensions : ', image.shape)
            resized2 = cv2.resize(image, (1024, 768), interpolation=cv2.INTER_AREA)
            print('Resized Dimensions : ', resized2.shape)
            print('template found')
            cv2.imshow("Image", resized2)

        cv2.waitKey(0)








if __name__ == "__main__":
    main()
