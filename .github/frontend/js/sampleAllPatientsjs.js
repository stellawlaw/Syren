const allPatients = [
  {
    "id": 19,
    "hospital": {
      "id": 1,
      "name": "riverside",
      "coordinates": {
        "longitude": 12.1,
        "latitude": 12.1
      }
    },
    "patientId": 12,
    "age": 22,
    "sex": "male",
    "vitals": {
      "id": 7,
      "bp": "10/120",
      "hr": 78,
      "loc": "alert",
      "rr": 12,
      "pupils": "dilated",
      "ekg": "120",
      "lungSounds": "great"
    },
    "medicalHistory": "Not Available",
    "allergies": "peanuts",
    "medication": "penicillin",
    "levelOfEmergency": "green",
    "drugAndAlcoholHistory": "bad",
    "chiefComplaint": "underInfluence",
    "summary": "flipped a car while driving under the influence",
    "careGiver": {
      "id": 13,
      "runId": 10,
      "careGiverId1": 11,
      "careGiverId2": 12,
      "careGiverId3": 13,
      "dateAndTime": "Nov 25, 2020"
    }
  },
  {
    "id": 20,
    "hospital": {
      "id": 2,
      "name": "osu",
      "coordinates": {
        "longitude": 13.1,
        "latitude": 13.1
      }
    },
    "patientId": 13,
    "age": 23,
    "sex": "female",
    "vitals": {
      "id": 8,
      "bp": "11/120",
      "hr": 90,
      "loc": "not awake",
      "rr": 13,
      "pupils": "constricted",
      "ekg": "130",
      "lungSounds": "raspy"
    },
    "medicalHistory": "Not Available",
    "allergies": "penicillin",
    "medication": "fluids",
    "levelOfEmergency": "yellow",
    "drugAndAlcoholHistory": "none",
    "chiefComplaint": "back hurts",
    "summary": "fell over and couldn't get up",
    "careGiver": {
      "id": 14,
      "runId": 11,
      "careGiverId1": 12,
      "careGiverId2": 13,
      "careGiverId3": 14,
      "dateAndTime": "Nov 27, 2020"
    }
  },
  {
    "id": 21,
    "hospital": {
      "id": 3,
      "name": "mount carmel",
      "coordinates": {
        "longitude": 14.1,
        "latitude": 14.1
      }
    },
    "patientId": 14,
    "age": 24,
    "sex": "male",
    "vitals": {
      "id": 9,
      "bp": "12/120",
      "hr": 80,
      "loc": "dead",
      "rr": 14,
      "pupils": "dilated",
      "ekg": "140",
      "lungSounds": "awful"
    },
    "medicalHistory": "Not Available",
    "allergies": "latex",
    "medication": "insulin",
    "levelOfEmergency": "red",
    "drugAndAlcoholHistory": "none",
    "chiefComplaint": "gun shot",
    "summary": "bar fight",
    "careGiver": {
      "id": 15,
      "runId": 12,
      "careGiverId1": 13,
      "careGiverId2": 14,
      "careGiverId3": 15,
      "dateAndTime": "Nov 26, 2020"
    }
  },
  {
    "id": 22,
    "hospital": {
      "id": 4,
      "name": "osu east",
      "coordinates": {
        "longitude": 15.1,
        "latitude": 15.1
      }
    },
    "patientId": 15,
    "age": 25,
    "sex": "female",
    "vitals": {
      "id": 10,
      "bp": "13/120",
      "hr": 75,
      "loc": "unconscious",
      "rr": 15,
      "pupils": "constricted",
      "ekg": "150",
      "lungSounds": "could be better"
    },
    "medicalHistory": "Not Available",
    "allergies": "ok",
    "medication": "prozac",
    "levelOfEmergency": "yellow",
    "drugAndAlcoholHistory": "a lot of drug use",
    "chiefComplaint": "broken knee",
    "summary": "playing sports",
    "careGiver": {
      "id": 16,
      "runId": 13,
      "careGiverId1": 14,
      "careGiverId2": 15,
      "careGiverId3": 16,
      "dateAndTime": "Nov 20, 2020"
    }
  },
  {
    "id": 23,
    "hospital": {
      "id": 5,
      "name": "st. marys",
      "coordinates": {
        "longitude": 16.1,
        "latitude": 16.1
      }
    },
    "patientId": 16,
    "age": 26,
    "sex": "male",
    "vitals": {
      "id": 11,
      "bp": "14/120",
      "hr": 72,
      "loc": "hyper",
      "rr": 16,
      "pupils": "dilated",
      "ekg": "160",
      "lungSounds": "not great"
    },
    "medicalHistory": "Not Available",
    "allergies": "ok",
    "medication": "morphine",
    "levelOfEmergency": "green",
    "drugAndAlcoholHistory": "heavy drinker",
    "chiefComplaint": "can't breathe",
    "summary": "mixed alcohol and morphine together ",
    "careGiver": {
      "id": 17,
      "runId": 14,
      "careGiverId1": 15,
      "careGiverId2": 16,
      "careGiverId3": 17,
      "dateAndTime": "Nov 18, 2020"
    }
  },
  {
    "id": 24,
    "hospital": {
      "id": 6,
      "name": "nationwide children's",
      "coordinates": {
        "longitude": 17.1,
        "latitude": 17.1
      }
    },
    "patientId": 17,
    "age": 27,
    "sex": "female",
    "vitals": {
      "id": 12,
      "bp": "15/120",
      "hr": 95,
      "loc": "non-responsive",
      "rr": 17,
      "pupils": "constricted",
      "ekg": "200",
      "lungSounds": "awesome"
    },
    "medicalHistory": "Not Available",
    "allergies": "ok",
    "medication": "benazepril",
    "levelOfEmergency": "red",
    "drugAndAlcoholHistory": "not good",
    "chiefComplaint": "heart problems",
    "summary": "had a heart attack",
    "careGiver": {
      "id": 18,
      "runId": 15,
      "careGiverId1": 16,
      "careGiverId2": 17,
      "careGiverId3": 18,
      "dateAndTime": "Nov 10, 2020"
    }
  }
]

  export {
      allPatients
  }