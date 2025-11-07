
from pydantic import BaseModel, EmailStr
from typing import Optional

class ContactForm(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    mobile: str
    destination: str
    startTime: str
    office: str
    counsellingMode: str
    studyLevel: str
    funding: str
    agreeTerms: bool
