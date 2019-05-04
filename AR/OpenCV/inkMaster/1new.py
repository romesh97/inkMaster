import cv2 as cv2
import numpy as np
import imutils


def main():

    template1 = cv2.imread("C:\\Users\\Manthika\\Desktop\\opencvtest\\template.jpg")
    template1 = cv2.cvtColor(template1, cv2.COLOR_BGR2GRAY)
    template1 = cv2.Canny(template1, 50, 200)
    template = imutils.resize(template1, width=60)
    (tH, tW) = template.shape[:2]
    cv2.imshow("Template", template)

    windowName = "Something"
    cv2.namedWindow(windowName)
    cap = cv2.VideoCapture(0)

    if cap.isOpened():
        ret, frame = cap.read()
    else:
        ret = False

    # loop over the frames to find the template
    while ret:
        # load the image, convert it to grayscale, and initialize the
        # bookkeeping variable to keep track of the matched region
        ret, frame = cap.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        found = None
        thada = 0

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
            (minVal, maxVal, _, maxLoc) = cv2.minMaxLoc(result)
            print(minVal, maxVal)

            # if we have found a new maximum correlation value, then ipdate
            # the bookkeeping variable
            if found is None or maxVal > found[0]:
                found = (maxVal, maxLoc, r)

        # unpack the bookkeeping varaible and compute the (x, y) coordinates
        # of the bounding box based on the resized ratio
        (maxVal, maxLoc, r) = found
        # Threshold setting, this 11195548 value is tested by some random images
        threshold = 500000
        if maxVal > threshold:
            print("match found")
            (startX, startY) = (int(maxLoc[0] * r), int(maxLoc[1] * r))
            (endX, endY) = (int((maxLoc[0] + tW) * r), int((maxLoc[1] + tH) * r))

            # draw a bounding box around the detected result and display the image
            cv2.rectangle(frame, (startX, startY), (endX, endY), (0, 0, 255), 2)
            cv2.imshow(windowName, frame)
        else:
            cv2.imshow(windowName, frame)
            print("no match found")

        if cv2.waitKey(1) == 27:
            break

    cv2.destroyAllWindows()
    cap.release()


if __name__ == "__main__":
    main()