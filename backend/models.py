
from pydantic import BaseModel, EmailStr
from typing import Optional

# This Pydantic model is used to validate the data from the contact form.
class ContactForm(BaseModel):
    # The first name of the person submitting the form.
    firstName: str
    # The last name of the person submitting the form.
    lastName: str
    # The email address of the person submitting the form.
    email: EmailStr
    # The mobile number of the person submitting the form.
    mobile: str
    # The desired study destination.
    destination: str
    # The preferred start time for the course.
    startTime: str
    # The nearest office location.
    office: str
    # The preferred mode of counselling.
    counsellingMode: str
    # The level of study the person is interested in.
    studyLevel: str
    # The source of funding for the studies.
    funding: str
    # Whether the person agrees to the terms and conditions.
    agreeTerms: bool
