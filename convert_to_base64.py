import base64
import requests

def url_to_base64(image_url):
    response = requests.get(image_url)
    return base64.b64encode(response.content).decode('utf-8')

base64_string = url_to_base64("https://storage.googleapis.com/capstone_buket1/adas.jpg")
print(base64_string)
