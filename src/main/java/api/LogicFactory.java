package api;

public class LogicFactory {

    boolean isPalindromUtil(String word) {
        int i1 = 0;
        int i2 = word.length() - 1;
        while (i2 > i1) {
            if (word.charAt(i1) != word.charAt(i2)) {
                return false;
            }
            ++i1;
            --i2;
        }
        return true;
    }

    String reverseStringUtil(String string) {
        String reversed = "";
        for (int i = string.length() - 1; i >= 0; i--) {
            reversed = reversed + string.charAt(i);
        }
        return reversed;
    }

}
