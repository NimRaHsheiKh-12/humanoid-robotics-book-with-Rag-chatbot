FROM python:3.11-slim

WORKDIR /app

COPY my-humanoid-book/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY my-humanoid-book .

CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8080"]
