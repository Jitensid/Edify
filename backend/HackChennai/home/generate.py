


import os
import json
from PIL import Image, ImageDraw, ImageFont 

def generate(certificate_given_to, certificate_text, certificate_file_path, font_file_path):
	
	text_y_position = 700

	img = Image.open(certificate_file_path, "r")

	width = img.width 

	height = img.height

	draw = ImageDraw.Draw(img)

	font = ImageFont.truetype(
		font_file_path,
		75)

	draw.text((750,650),certificate_given_to, font=font, fill=(0, 0, 0))

	font = ImageFont.truetype(
		font_file_path,
		30)

	draw.text((700,800),certificate_text, font=font, fill=(0, 0, 0))

	img.save("{}.png".format(certificate_given_to))  

	return 0

certificate_file_path = "/home/jiten/Desktop/template.png"

font_file_path = "/home/jiten/Desktop/OpenSans-Light.ttf"

print(generate("Jiten Sidhpura","sharing his/her talent of dance to others",certificate_file_path, font_file_path))