package util;

import java.io.*;

class UserJsonHandler {

    private final ClassLoader classLoader = this.getClass().getClassLoader();

    String getUsers() {
        try {
            final File file = new File("src/main/res/users.json");
            final StringBuilder stringBuilder = new StringBuilder();
            final BufferedReader br = new BufferedReader(new FileReader(file));
            String line;
            while ((line = br.readLine()) != null) {
                stringBuilder.append(line);
            }
            return stringBuilder.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

}
