// Ardublockly generated sketch
#include <Scott.h>

Scott robot(ORIGINAL);

void setup() {
  robot.setSpeed(35);
  robot.init();
}

void loop() {
  for (int count = 0; count < 2; count++) {
    robot.avancer(100);
    robot.tournerGauche(90);
  }

}