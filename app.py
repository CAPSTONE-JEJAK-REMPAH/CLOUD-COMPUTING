from flask import Flask, request, jsonify
import h5py
import numpy as np
import tensorflow as tf
from PIL import Image
import io
import base64
from openfile import open_model  # Mengimpor fungsi dari openfile.py

app = Flask(__name__)

# Path ke model Anda
MODEL_PATH = 'model/Spiices.h5'

# Fungsi untuk memuat model TensorFlow
def load_model(model_path):
    try:
        model = tf.keras.models.load_model(model_path)
        return model
    except Exception as e:
        return f"Error loading model: {e}"

# Memuat model saat aplikasi dimulai
model = load_model(MODEL_PATH)

@app.route('/')
def home():
    return "API is running"

# Endpoint untuk mendapatkan informasi isi model
@app.route('/model-info', methods=['GET'])
def model_info():
    model_info = open_model(MODEL_PATH)
    return jsonify({"model_info": model_info})

# Endpoint untuk prediksi
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Ambil gambar dari request (misalnya data base64)
        data = request.get_json()
        image_data = data['image']  # Misalnya data berupa gambar dalam format base64

        # Decode base64 ke gambar
        img_bytes = base64.b64decode(image_data)
        img = Image.open(io.BytesIO(img_bytes))

        # Convert image ke array numpy (sesuaikan dengan ukuran input model)
        img = img.resize((224, 224))  # Contoh resize ke ukuran yang diinginkan
        img_array = np.array(img) / 255.0  # Normalisasi gambar

        # Jika model membutuhkan batch dimension
        img_array = np.expand_dims(img_array, axis=0)

        # Prediksi menggunakan model
        predictions = model.predict(img_array)

        return jsonify({"predictions": predictions.tolist()})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
