function getCount(str) {
  return str.match(/[aeiou]/g) || [];
}
console.log(getCount("durbeke"));

console.log(getCount("durbeke"));

console.log(getCount("durbeke"));

import cv2
import matplotlib.pyplot as plt

img = cv2.imread('/Users/macintoshhd/Desktop/mika.jpg', 1)

img = cv2. cvtColor(img, cv2.COLOR_BGR2RGB)

box = cv2.boxFilter (img, -1, (33, 33))

blur = cv2.blur(img, (13, 13))

gaussian = cv2.GaussianBlur(img, (37, 37), 0)

titles = ['Original Image''Box Filter'
'Blur', 'Gaussian Blur']

outputs = [img, box, blur, gaussian]

for i in range (4) :
        pit.subplot (2, 2, i+1)
        plt.imshow(outputs [i])
        plt.title(titles[i])
        plt.xticks ([])
        plt.yticks ([])
plt.show ()