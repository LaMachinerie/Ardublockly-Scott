// Ardublockly generated sketch
#include <Scott.h>

Scott robot(ORIGINAL);

void setup() {
  robot.setSpeed(35);
  robot.init();
}

void loop() {
  robot.leverCrayon();
  robot.tournerDroite(90);
  robot.avancer(100);
  robot.tournerDroite(180);
  robot.descendreCrayon();
  robot.avancer(100);
  robot.tournerDroite(90);
  for (int count = 0; count < 5; count++) {
    robot.avancer(10);
    robot.tournerGauche(90);
    robot.avancer(10);
    robot.tournerDroite(90);
  }
  robot.tournerGauche(90);
  robot.avancer(100);
  while(true);

}