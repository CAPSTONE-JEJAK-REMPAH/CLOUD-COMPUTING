# Gunakan Python image yang ringan
FROM python:3.9-slim

# Set environment untuk port
ENV PORT 8080

# Set working directory
WORKDIR /app

# Salin semua file proyek
COPY . .

# Instal dependensi
RUN pip install --no-cache-dir -r requirements.txt

# Ekspos port 8080
EXPOSE 8080

# Jalankan aplikasi
CMD ["gunicorn", "-b", "0.0.0.0:8080", "run:app"]

