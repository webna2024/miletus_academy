FROM python:3.9
ENV PYTHONUNBUFFERED 1
WORKDIR /app
RUN apt-get update && apt-get install -y gcc python3-dev libpq-dev
COPY requirements.txt /app/
RUN pip install -r requirements.txt
COPY . /app/


# FROM python:3.9

# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# WORKDIR /code

# COPY requirements.txt .
# RUN pip install -r requirements.txt

# COPY . .