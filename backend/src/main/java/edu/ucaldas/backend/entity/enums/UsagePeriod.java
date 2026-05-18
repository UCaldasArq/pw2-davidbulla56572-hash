package edu.ucaldas.backend.entity.enums;

public enum UsagePeriod {

    MORNING("Morning"),
    AFTERNOON("Afternoon"),
    NIGHT("Night");

    String message;

    UsagePeriod(String message){
        this.message = message;
    }

}
