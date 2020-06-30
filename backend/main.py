from fastapi import FastAPI

app = FastAPI()

@app.get('/login')
async def login():
    return {"message":"hello"}