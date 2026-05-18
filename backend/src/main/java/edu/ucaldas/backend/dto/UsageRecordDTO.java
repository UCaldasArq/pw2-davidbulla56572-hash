package edu.ucaldas.backend.dto;

import edu.ucaldas.backend.entity.Application;
import edu.ucaldas.backend.entity.User;
import edu.ucaldas.backend.entity.enums.UsagePeriod;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsageRecordDTO {

    private Long id;
    private User user;
    private String firstName;
    private Application application;
    private Integer days;
    private Integer hours;
    private Integer minutes;
    private UsagePeriod usagePeriod;
}
