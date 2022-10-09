package util;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import com.fasterxml.jackson.databind.ObjectMapper;

public class UserExporter {

    public List<User> getUsersList() {

        UserJsonHandler handler = new UserJsonHandler();
        ObjectMapper mapper = new ObjectMapper();
        try {
            List<User> users = Arrays.asList(mapper.readValue(handler.getUsers(), User[].class));
            return users;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
