package com.ust.user.jwtFilter;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.HttpMethod;
import org.springframework.web.filter.GenericFilterBean;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

public class AuthFilter extends GenericFilterBean {
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		String authHeader = req.getHeader("Authorization");

		if (req.getMethod().equalsIgnoreCase(HttpMethod.OPTIONS.name())) {
			chain.doFilter(request, response);
		} else {
			if (authHeader == null || !authHeader.startsWith("Bearer")) {
				throw new ServletException("Missing or Invalid Authorization Header");
			}
			try {
				String token = authHeader.substring(7);

				Claims claim = Jwts.parser().setSigningKey(getSigningKey(req)).parseClaimsJws(token).getBody();

				// Extract user information from the claims and perform necessary actions
				String username = claim.get("username", String.class);
				// You can access other properties of the user like firstname, lastname, etc.

				req.setAttribute("username", username); // Set the username attribute in the request

				chain.doFilter(request, response);
			} catch (Exception e) {
				resp.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid JWT token. Not Authorized");
			}
		}
	}

	private String getSigningKey(HttpServletRequest request) {
		// Retrieve the signing key based on the user type (you can modify this logic as per your requirements)
		String username = request.getHeader("username");

		if (username != null && username.equals("admin")) {
			return "adminsecretkey"; // You can modify the key for the admin here
		} else {
			return "usersecretkey"; // Default key for other types
		}
	}
}
