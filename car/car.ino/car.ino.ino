int p1 = 4, p2 = 5, p3 = 6, p4 = 7;
char sig;
void setup() {
  pinMode(p1, OUTPUT);
  pinMode(p3, OUTPUT);
  pinMode(p3, OUTPUT);
  pinMode(p4, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  while (Serial.available() >= 0)
  {
    sig = Serial.read();
    switch (sig)
    {
      case 'f': {
          digitalWrite(p1, HIGH);
          digitalWrite(p2, LOW);
          digitalWrite(p3, HIGH);
          digitalWrite(p4, LOW);
          break;
        }
      case 'b': {
          digitalWrite(p2, HIGH);
          digitalWrite(p1, LOW);
          digitalWrite(p4, HIGH);
          digitalWrite(p3, LOW);
          break;
        }
      case 'l': {
          digitalWrite(p2, HIGH);
          digitalWrite(p1, LOW);
          digitalWrite(p3, HIGH);
          digitalWrite(p4, LOW);
          break;
        }
      case 'r': {
          digitalWrite(p1, HIGH);
          digitalWrite(p2, LOW);
          digitalWrite(p4, HIGH);
          digitalWrite(p3, LOW);
          break;
        }
      case 's': {
          digitalWrite(p2, LOW);
          digitalWrite(p1, LOW);
          digitalWrite(p4, LOW);
          digitalWrite(p3, LOW);
          break;
        }
        default:break;
    }
  }
}
