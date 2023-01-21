from fastapi import FastAPI,Request,UploadFile,File
from fastapi.middleware.cors import CORSMiddleware
from model import Item, Track
import os
import requests
from PyPDF2 import PdfReader
from helpers import extract_text_from_pdf

# from database_f import fetch_all_items, fetch_one_item, create_item, update_item, remove_item
# app object
app = FastAPI()
headers = {
    'user-agent': "CoverLetterIO",
    'Content-Type': "application/json",
    'Accept': "application/json",
}
#CORS

origins = [
    "http://localhost:3000",
    "http://localhost:8000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

# get items
@app.get("/api/get_items")
async def get_items():
    return 1
    

@app.post("/api/post_item")
async def post_data(item: Item):
    return (f"Got this {item.name}!") 
    
@app.post("/file")
async def upload_file(uploaded_file: UploadFile = File(...)):
    file_location = f"./files/{uploaded_file.filename}"
    with open(file_location, "wb+") as file_object:
        file_object.write(uploaded_file.file.read())
    
    extracted_text = extract_text_from_pdf(file_location)

    return {"filename": uploaded_file.filename, "extracted_text": extracted_text}

