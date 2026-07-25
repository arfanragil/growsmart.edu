from PIL import Image

def remove_background(input_path, output_path, threshold=220):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # If all RGB values are above the threshold, it's close to white
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                # Replace with a transparent pixel
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

remove_background("public/logo.jpg", "public/logo-transparent.png", threshold=230)
