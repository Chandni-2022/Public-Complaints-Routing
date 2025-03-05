from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from model import classify_complaint
import uvicorn
import logging

# Initialize FastAPI app
app = FastAPI()

# Logging
logging.basicConfig(level=logging.INFO)

# Request Model
class ComplaintRequest(BaseModel):
    complaint: str

# Root Endpoint
@app.get("/")
async def root():
    return {"message": "Complaint Classification ML API Running"}

# Classification Endpoint
@app.post("/predict")
async def predict_complaint(data: ComplaintRequest):
    try:
        classification_result = classify_complaint(data.complaint)
        return classification_result
    except Exception as e:
        logging.error(f"Error in prediction: {e}")
        raise HTTPException(status_code=500, detail="Error processing complaint")

# Run FastAPI Server
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)