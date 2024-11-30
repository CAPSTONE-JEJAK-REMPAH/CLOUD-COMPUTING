import h5py

def open_model(file_path):
    try:
        with h5py.File(file_path, 'r') as f:
            model_info = list(f.keys())  # Menampilkan kunci-kunci dalam file HDF5
            return model_info
    except Exception as e:
        return f"Error opening model: {str(e)}"
