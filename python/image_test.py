class ImageTest():
    def __init__(self):
        self.dict = dict()

    def insert(self, key: str, val: any):
        self.dict[key] = val
    
    def get(self, key: str):
        if key in self.dict:
            return self.dict[key]
        raise KeyError("Couldn't find the key")

if __name__ == "__main__":
    image_test = ImageTest()
    image_test.insert('hi', 'hello')
    image_test.get('hi')