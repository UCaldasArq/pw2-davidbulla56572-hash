package edu.ucaldas.backend.mapper;

import edu.ucaldas.backend.dto.UsageRecordDTO;
import edu.ucaldas.backend.entity.UsageRecord;
import org.springframework.stereotype.Component;

@Component
public class UsageRecordMapper {

    public UsageRecordDTO toDTO(UsageRecord record) {
        if (record == null) return null;
        return UsageRecordDTO.builder()
                .id(record.getId())
                .user(record.getUser())
                .firstName(record.getUser().getFirstName())
                .usagePeriod(record.getUsagePeriod())
                .days(record.getDays())
                .hours(record.getHours())
                .minutes(record.getMinutes())
                .application(record.getApplication())
                .build();
    }
}
