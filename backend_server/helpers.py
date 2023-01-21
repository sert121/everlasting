from PyPDF2 import PdfReader

reader = PdfReader("example.pdf")
number_of_pages = len(reader.pages)
page = reader.pages[0]
text = page.extract_text()

# print(text[:1000])

def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    number_of_pages = len(reader.pages)
    main_page = ""
    # iteratively extract and append text from each page

    for page in reader.pages:
        text = page.extract_text()
        main_page+="\n"
        main_page+= text

    
    return main_page.replace("\n", " ")