M104 S0         ; Hotend off
M84             ; Disable stepper motors
M107            ; Fan off
M190 S57        ; Wait for Bed 57C
G4 S7200        ; Hold 2 hours (7200s)
M140 S0         ; Bed off
