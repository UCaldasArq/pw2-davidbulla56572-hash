package edu.ucaldas.backend.mapper;

import edu.ucaldas.backend.dto.UserDTO;
import edu.ucaldas.backend.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public UserDTO toDTO(User user) {
        if (user == null) return null;
        return UserDTO.builder()
                .id(user.getId())
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .document(user.getDocument())
                .phoneNumber(user.getPhoneNumber())
                .createdAt(user.getCreatedAt())
                .build();
    }

    public User toEntity(UserDTO dto) {
        if (dto == null) return null;
        return User.builder()
                .id(dto.getId())
                .email(dto.getEmail())
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .document(dto.getDocument())
                .phoneNumber(dto.getPhoneNumber())
                .createdAt(dto.getCreatedAt())
                .build();
    }
}
