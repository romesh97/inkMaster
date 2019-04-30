import cv2 as cv2
import numpy as np
import imutils


def main():
    template1 = cv2.imread("C:\\Users\\Manthika\\Desktop\\opencvtest\\templates\\template1.jpg")
    template2 = cv2.imread("C:\\Users\\Manthika\\Desktop\\opencvtest\\templates\\temp.jpg")
    templates = [template1, template2]

    for i in range(len(templates)):
        templates[i] = cv2.cvtColor(templates[i], cv2.COLOR_BGR2GRAY)
        templates[i] = cv2.Canny(templates[i], 50, 140)
        templates[i] = imutils.resize(templates[i], width=50)

    (tH, tW) = templates[0].shape[:2]
    print(tH)
    print(tW)
    # cv2.imshow("Template", template)

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


        # loop over the scales of the image
        for scale in np.linspace(0.2, 1.0, 20)[::-1]:
            # resize the image according to the scale, and keep track
            # of the ratio of the resizing
            resized = imutils.resize(gray, width=int(gray.shape[1] * scale))
            r = gray.shape[1] / float(resized.shape[1])

            # if the resized image is smaller than the template, then break
            # from the loop
            if resized.shape[0] < tH or resized.shape[1] < tW:
                print("frame is smaller than the template")
                break

            # detect edges in the resized, grayscale image and apply template
            # matching to find the template in the image
            edged = cv2.Canny(resized, 50, 160)

            curr_max = 0
            index = 0
            result = None

            # find the best match
            for i in range(len(templates)):
                # perform matchtemplate
                res = cv2.matchTemplate(edged, templates[i], cv2.TM_CCOEFF)
                # get the highest correlation value of the result
                maxVal = res.max()
                # if the correlation is highest thus far, store the value and index of template
                if maxVal > curr_max:
                    curr_max = maxVal
                    index = i
                    result = res

            print(index)
            # result = cv2.matchTemplate(edged, templates[index], cv2.TM_CCOEFF)
            (_, maxVal, _, maxLoc) = cv2.minMaxLoc(result)

            # if we have found a new maximum correlation value, then update
            # the bookkeeping variable
            if found is None or maxVal > found[0]:
                found = (maxVal, maxLoc, r)

            # unpack the bookkeeping variable and compute the (x, y) coordinates
            # of the bounding box based on the resized ratio
        # print(found)
        if found is None:
            # just show only the frames if the template is not detected
            cv2.imshow(windowName, frame)
            print("No template is found")
        else:
            (_, maxLoc, r) = found
            (startX, startY) = (int(maxLoc[0] * r), int(maxLoc[1] * r))
            (endX, endY) = (int((maxLoc[0] + tW) * r), int((maxLoc[1] + tH) * r))

            # draw a bounding box around the detected result and display the image

            cv2.rectangle(frame, (startX, startY), (endX, endY), (0, 0, 255), 2)
            cv2.imshow(windowName, frame)

            # edgedf = cv2.Canny(frame, 50, 160)
            # cv2.imshow("edged", edgedf)

        if cv2.waitKey(1) == 27:
            break

    cv2.destroyAllWindows()
    cap.release()


if __name__ == "__main__":
    main()