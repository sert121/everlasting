from pydantic import BaseModel

class Item(BaseModel):
    id: str
    name: str
class Track(BaseModel):
    artist: str
    track: str
