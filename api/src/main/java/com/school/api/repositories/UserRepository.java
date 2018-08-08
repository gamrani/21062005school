package com.school.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.api.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
