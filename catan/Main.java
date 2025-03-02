import java.util.*;

public class Main {
    public static void main(String[] args) {
        Board board = new Board();
        List<HexTile> boardList = board.getBoard();

        for (HexTile tile : boardList) {
            System.out.println(tile);
        }
    }
}