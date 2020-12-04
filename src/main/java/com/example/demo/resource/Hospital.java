package com.example.demo.resource;

import javax.persistence.*;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Entity
public class Hospital {
    @Id
    @GeneratedValue
    private long id;
    @OneToMany(mappedBy = "hospital", orphanRemoval = true)
    private List<Patient> patients = Collections.EMPTY_LIST;
    private String name;
    @Embedded
    private Coordinates coordinates;

    protected Hospital(){}

    public Hospital(String name, Coordinates coordinates) {
        this.name = name;
        this.coordinates = coordinates;
    }
    public long getId() {
        return id;
    }

    public List<Patient> getPatients() {
        return patients;
    }

    public String getName() {
        return name;
    }

    public Coordinates getCoordinates() {
        return coordinates;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Hospital hospital = (Hospital) o;
        return id == hospital.id &&
                Objects.equals(name, hospital.name) &&
                Objects.equals(coordinates, hospital.coordinates);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, coordinates);
    }
}
