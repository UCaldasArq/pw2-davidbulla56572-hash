package edu.ucaldas.backend.dto;

import edu.ucaldas.backend.entity.enums.UsagePeriod;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsageRegistrationDTO {
    @NotNull(message = "User ID is required")
    private Long userId;

    @NotNull(message = "Application ID is required")
    private Long applicationId;

    private Integer days;

    private Integer hours;

    private Integer minutes;

    private String usagePeriod;

}
