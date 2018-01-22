## This outlines the basis of the application and the various components I will need to create for this to work.

### Backend components
- Creating a configuration service
  - Which defines whether the alarm is armed / disarmed (With a hard override from the alarm circuit)
  - Defined the zones, and whether or not they are enabled. 
  - /configuration

- Health Status check
  - Confirming whether the alarm is armed / disarmed
  - Zone statuses
  - Whether or not the alarm is sounding
  - /health/zones
  - /health/status

- Backend service to enable / disable alarm
  - /alarm/arm
  - /alarm/disarm

- Stats
  - The details sent as part of the health check, will need to be logged to keep track of the stats. 
  - Aggregation / rotation
    - Per hour  	/stats/hour
    - Per day		/stats/day
    - Per week		/stats/week
    - Per month		/stats/month
    - Per year		/stats/year

- Other general, considerations
  - Graph data
  - How often do I update states? Every minute?
  - Detecting when alarm hasn't checked in, in a while. Could be ADSL related


### Frontend 
- Create interfaces for
  - Dashboard
    - Alarm armed / unarmed
    - Zone ignored in arming
  - Warnings based on health
    - "Last check-in was 1 hour ago"
    - Alarm is ringing, "Front Door" open
  - Updating / Viewing configuration
  - Viewing, renaming, enabling, disabling zones
  - Arming / disarming alarm
  - Stats view, on the stats basis, hour, day, week, month, year
  
  
### Hardware
- Integrate WIFI
- Hall Sensor Integration
- Find magnet strips
- Hall Sensor Wiring
- Temperature sensor
- RF Remote integration and antenna
- RF Remote to be used to:
  - Arm alarm
  - Disarm alarm
  - Binding both remotes
- When alarm is armed, and zone broken, push alarm triggered status
- Configuration
  - Read and implement the configuration of which zone is armed
  - Push armed / disarmed status, until confirmed as updated

### 3D Printing
- Hall Sensor packaging
  - Front / Back door
  - Garage Door
  - Siding door
- RF remote packaging
- Alarm Container with ports / battery for running (Yellow)
