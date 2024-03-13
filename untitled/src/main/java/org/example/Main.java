package org.example;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;

public class Main {
    public static void main(String[] args) {
        // Token JWT a decodificar
        String jwtToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlcnVzZXJAc3VwZXJ1c2VyLmNvbSIsImV4cCI6MTcxMDM2MTA4NiwiaWF0IjoxNzEwMzU1MDg2fQ.9C1hm5qXff2Y5qFNhaG7NJARtilPZTXQlEV_jV2VP0c";

        try {
            // Decodificar el token JWT (sin verificar la firma)
            Jws<Claims> jwsClaims = Jwts.parser().parseClaimsJws(jwtToken);
            Claims claims = jwsClaims.getBody();

            // Extraer información del token decodificado
            int id = (int) claims.get("id");
            String email = claims.get("email", String.class);
            String name = claims.get("name", String.class);
            String lastName = claims.get("lastName", String.class);
            String city = claims.get("city", String.class);
            String role = claims.get("role", String.class);

            // Imprimir la información extraída
            System.out.println("ID: " + id);
            System.out.println("Email: " + email);
            System.out.println("Name: " + name);
            System.out.println("Last Name: " + lastName);
            System.out.println("City: " + city);
            System.out.println("Role: " + role);

        } catch (Exception e) {
            System.out.println("Error al decodificar el token JWT: " + e.getMessage());
        }
    }
}
