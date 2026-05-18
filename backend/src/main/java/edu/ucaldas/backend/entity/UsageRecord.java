package edu.ucaldas.backend.entity;

import edu.ucaldas.backend.entity.enums.UsagePeriod;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "usage_records")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsageRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "application_id", nullable = false)
    private Application application;

    private String firstName;

    private Integer days;

    private Integer hours;

    private Integer minutes;

    @Enumerated(EnumType.STRING)
    private UsagePeriod usagePeriod;
}
