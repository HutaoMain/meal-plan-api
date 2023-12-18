# Meal Plan API

## Info

This API provides endpoints for managing and searching foods for meal plans.

## Endpoints

### 1. Create Food

- **Method:** `POST`
- **Endpoint:** `/create`
- **Description:** Create a new food item.
- **Request Body:**
  - Sample:
    ```json
    {
      "name": "Salmon and Asparagus",
      "image": "https://example.com/salmon.jpg",
      "calories": "350",
      "description": "A healthy meal with grilled salmon and fresh asparagus.",
      "ingredients": [
        "Salmon Fillet",
        "Asparagus",
        "Lemon",
        "Olive Oil",
        "Salt",
        "Pepper"
      ],
      "mealType": "lunch",
      "allergies": ["Fish"],
      "bmiRange": {
        "min": 16.5,
        "max": 18
      }
    }
    ```
- **Response:**
  - **Status Code:** `200 OK`
  - **Sample:**
    ```json
    {
      "name": "Salmon and Asparagus",
      "image": "https://example.com/salmon.jpg",
      "calories": "350",
      "description": "A healthy meal with grilled salmon and fresh asparagus.",
      "ingredients": [
        "Salmon Fillet",
        "Asparagus",
        "Lemon",
        "Olive Oil",
        "Salt",
        "Pepper"
      ],
      "mealType": "lunch",
      "allergies": ["Fish"],
      "bmiRange": {
        "min": 16.5,
        "max": 18
      }
    }
    ```

### 2. Get Food by ID

- **Method:** `GET`
- **Endpoint:** `/single/:id`
- **Description:** Get details of a food item by ID.
- **Response:**
  - **Status Code:** `200 OK`
  - **Sample:**
    ```json
    {
      "_id": "generatedObjectId",
      "name": "Salmon and Asparagus",
      "image": "https://example.com/salmon.jpg",
      "calories": "350",
      "description": "A healthy meal with grilled salmon and fresh asparagus.",
      "ingredients": [
        "Salmon Fillet",
        "Asparagus",
        "Lemon",
        "Olive Oil",
        "Salt",
        "Pepper"
      ],
      "mealType": "lunch",
      "allergies": ["Fish"],
      "bmiRange": {
        "min": 16.5,
        "max": 18
      }
    }
    ```

### 3. Get Food List

- **Method:** `GET`
- **Endpoint:** `/`
- **Description:** Get a paginated list of food items. The number of json per page is 5
- **Query Parameters:**
  - `page` (optional): Page number (default is 1).
- **Response:**
  - **Status Code:** `200 OK`
  - **Sample:**
    ```json
    {
      "food": [
        {
          "_id": "6571331300589daedbc10539",
          "name": "Salmon and Asparagus",
          "image": "https://d219o304zcx1el.cloudfront.net/b9a81697-dca9-40db-a723-7a140ae319e4.jpeg",
          "calories": "350",
          "description": "A healthy meal with grilled salmon and fresh asparagus.",
          "ingredients": [
            "Salmon Fillet",
            "Asparagus",
            "Lemon",
            "Olive Oil",
            "Salt",
            "Pepper"
          ],
          "mealType": "lunch",
          "allergies": ["Fish"],
          "bmiRange": {
            "min": 16.5,
            "max": 18,
            "_id": "6547aa7e460da3ab652b6d34"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        },
        {
          "_id": "6571331300589daedbc1053f",
          "name": "Avocado Toast With Smoked Salmon",
          "image": "https://www.seriouseats.com/thmb/4TmxBJdyqSrOM0PHQrb479SeeaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__05__20160502-avocado-toast-vicky-wasik-salmon-8-a7a4152ebdf3456a9df61ee9dd1179d6.jpg",
          "calories": "450",
          "description": "A simple and nutritious breakfast that combines smoked salmon, avocado, cream cheese, and whole wheat bread.",
          "ingredients": [
            "Smoked Salmon",
            "Avocado",
            "Cream Cheese",
            "Whole Wheat Bread",
            "Lemon Juice",
            "Dill",
            "Salt",
            "Pepper"
          ],
          "mealType": "breakfast",
          "allergies": ["Fish"],
          "bmiRange": {
            "min": 0,
            "max": 18,
            "_id": "6547aa92460da3ab652b6d3d"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        },
        {
          "_id": "6571331300589daedbc10541",
          "name": "Peanut Butter Banana Smoothie",
          "image": "https://www.simplyrecipes.com/thmb/z2BhuKnd7RCHViYFg1E4J_IGkS0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Peanut-Butter-Banana-Smoothie-LEAD-4_RECIRC-af849a5c756143aa88c80b727a44cbaf.jpg",
          "calories": "500",
          "description": "A creamy and filling smoothie that blends banana, peanut butter, milk, yogurt, and honey.",
          "ingredients": ["Banana", "Peanut Butter", "Milk", "Yogurt", "Honey"],
          "mealType": "snack",
          "allergies": ["Milk", "Peanuts"],
          "bmiRange": {
            "min": 0,
            "max": 18,
            "_id": "6547aa98460da3ab652b6d40"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        },
        {
          "_id": "6571331300589daedbc10543",
          "name": "Chicken and Rice Casserole",
          "image": "https://www.jocooks.com/wp-content/uploads/2018/12/chicken-broccoli-rice-casserole-1-10.jpg",
          "calories": "600",
          "description": "A hearty and comforting dish that bakes chicken, rice, cream of mushroom soup, cheese, and vegetables in one pan.",
          "ingredients": [
            "Chicken",
            "Rice",
            "Cream of Mushroom Soup",
            "Cheese",
            "Butter",
            "Onion",
            "Carrot",
            "Celery",
            "Garlic",
            "Parsley",
            "Salt",
            "Pepper"
          ],
          "mealType": "lunch",
          "allergies": ["Milk"],
          "bmiRange": {
            "min": 0,
            "max": 18,
            "_id": "6547aaa1460da3ab652b6d43"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        },
        {
          "_id": "6571331300589daedbc10545",
          "name": "Granola and Yogurt Parfait",
          "image": "https://swirlsofflavor.com/wp-content/uploads/2022/01/Fruit-Yogurt-Parfait-Horizontal-1-scaled.jpg",
          "calories": "400",
          "description": "A crunchy and creamy breakfast that layers granola, yogurt, and fresh fruits in a glass.",
          "ingredients": [
            "Granola",
            "Yogurt",
            "Strawberries",
            "Blueberries",
            "Honey"
          ],
          "mealType": "breakfast",
          "allergies": ["Milk", "Tree nuts"],
          "bmiRange": {
            "min": 0,
            "max": 18,
            "_id": "6547aaa6460da3ab652b6d46"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        }
      ]
    }
    ```

### 4. Update Food by ID

- **Method:** `PUT`
- **Endpoint:** `/update/:id`
- **Description:** Update details of a food item by ID.
- **Request Body:**

  - Sample:

    ```json
    {
      "calories": "400"
    }
    ```

- **Response:**
  - **Status Code:** `200 OK`
  - **Sample:**
    ```json
    {
      "_id": "generatedObjectId",
      "name": "Salmon and Asparagus",
      "image": "https://example.com/salmon.jpg",
      "calories": "400",
      "description": "A healthy meal with grilled salmon and fresh asparagus.",
      "ingredients": [
        "Salmon Fillet",
        "Asparagus",
        "Lemon",
        "Olive Oil",
        "Salt",
        "Pepper"
      ],
      "mealType": "lunch",
      "allergies": ["Fish"],
      "bmiRange": {
        "min": 16.5,
        "max": 18
      }
    }
    ```

### 5. Delete Food by ID

- **Method:** `DELETE`
- **Endpoint:** `/delete/:id`
- **Description:** Delete a food item by ID.
- **Response:**
  - **Status Code:** `200 OK`
  - **Sample:**
    ```json
    {
      "_id": "generatedObjectId",
      "name": "Salmon and Asparagus",
      "image": "https://example.com/salmon.jpg",
      "calories": "350",
      "description": "A healthy meal with grilled salmon and fresh asparagus.",
      "ingredients": [
        "Salmon Fillet",
        "Asparagus",
        "Lemon",
        "Olive Oil",
        "Salt",
        "Pepper"
      ],
      "mealType": "lunch",
      "allergies": ["Fish"],
      "bmiRange": {
        "min": 16.5,
        "max": 18
      }
    }
    ```

### 6. Search by Ingredient

- **Method:** `GET`
- **Endpoint:** `/search/ingredient/:ingredientName`
- **Query Parameters:**
  - `page` (optional): Page number (default is 1).
- **Description:** Search for foods containing a specific ingredient. The number of json per page is 5.
- **Response:**

  - **Status Code:** `200 OK`
  - **Sample:**
    ```json
    {
      "foods": [
        {
          "_id": "6571331300589daedbc10541",
          "name": "Peanut Butter Banana Smoothie",
          "image": "https://www.simplyrecipes.com/thmb/z2BhuKnd7RCHViYFg1E4J_IGkS0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Peanut-Butter-Banana-Smoothie-LEAD-4_RECIRC-af849a5c756143aa88c80b727a44cbaf.jpg",
          "calories": "500",
          "description": "A creamy and filling smoothie that blends banana, peanut butter, milk, yogurt, and honey.",
          "ingredients": ["Banana", "Peanut Butter", "Milk", "Yogurt", "Honey"],
          "mealType": "snack",
          "allergies": ["Milk", "Peanuts"],
          "bmiRange": {
            "min": 0,
            "max": 18,
            "_id": "6547aa98460da3ab652b6d40"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        },
        {
          "_id": "6571331300589daedbc1054b",
          "name": "Peanut Butter and Jelly Sandwich",
          "image": "https://www.allrecipes.com/thmb/SpLbvOKqRtr6U3iodmNcJ5FgnAw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/49943-grilled-peanut-butter-and-jelly-sandwich-4x3-0309-085648b2dc5f421da0fbef9292a89ff0.jpg",
          "calories": "400",
          "description": "A timeless and easy sandwich that spreads peanut butter and jelly on whole wheat bread.",
          "ingredients": ["Peanut Butter", "Jelly", "Whole Wheat Bread"],
          "mealType": "snack",
          "allergies": ["Peanuts"],
          "bmiRange": {
            "min": 0,
            "max": 18,
            "_id": "6547aab8460da3ab652b6d4f"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        },
        {
          "_id": "6571364000589daedbc107e6",
          "name": "Apple and Peanut Butter",
          "image": "https://www.lottaveg.com/wp-content/uploads/2017/05/Apple-Peanut-Butter.jpg",
          "calories": "250",
          "description": "A simple and satisfying snack that pairs apple slices with peanut butter.",
          "ingredients": ["Apple", "Peanut Butter"],
          "mealType": "snack",
          "allergies": ["Peanuts"],
          "bmiRange": {
            "min": 18.5,
            "max": 24.9,
            "_id": "6547ad1f460da3ab652b6d5c"
          },
          "createdAt": "2023-12-07T03:04:32.842Z",
          "updatedAt": "2023-12-07T03:04:32.842Z",
          "__v": 0
        }
      ]
    }
    ```

  ```

  ```

### 7. Search by BMI Range

- **Method:** `GET`
- **Endpoint:** `/search/bmi/:min/:max`
- **Query Parameters:**
  - `page` (optional): Page number (default is 1).
- **Description:** Search for foods within a specified BMI range. The number of JSON items per page is 5..
- **Response:**
  - **Status Code:** `200 OK`
  - **Sample:**
    ```json
    {
      "foods": [
        {
          "_id": "6571331300589daedbc10539",
          "name": "Salmon and Asparagus",
          "image": "https://d219o304zcx1el.cloudfront.net/b9a81697-dca9-40db-a723-7a140ae319e4.jpeg",
          "calories": "350",
          "description": "A healthy meal with grilled salmon and fresh asparagus.",
          "ingredients": [
            "Salmon Fillet",
            "Asparagus",
            "Lemon",
            "Olive Oil",
            "Salt",
            "Pepper"
          ],
          "mealType": "lunch",
          "allergies": ["Fish"],
          "bmiRange": {
            "min": 16.5,
            "max": 18,
            "_id": "6547aa7e460da3ab652b6d34"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        },
        {
          "_id": "6571331300589daedbc1053f",
          "name": "Avocado Toast With Smoked Salmon",
          "image": "https://www.seriouseats.com/thmb/4TmxBJdyqSrOM0PHQrb479SeeaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__05__20160502-avocado-toast-vicky-wasik-salmon-8-a7a4152ebdf3456a9df61ee9dd1179d6.jpg",
          "calories": "450",
          "description": "A simple and nutritious breakfast that combines smoked salmon, avocado, cream cheese, and whole wheat bread.",
          "ingredients": [
            "Smoked Salmon",
            "Avocado",
            "Cream Cheese",
            "Whole Wheat Bread",
            "Lemon Juice",
            "Dill",
            "Salt",
            "Pepper"
          ],
          "mealType": "breakfast",
          "allergies": ["Fish"],
          "bmiRange": {
            "min": 0,
            "max": 18,
            "_id": "6547aa92460da3ab652b6d3d"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        },
        {
          "_id": "6571331300589daedbc10541",
          "name": "Peanut Butter Banana Smoothie",
          "image": "https://www.simplyrecipes.com/thmb/z2BhuKnd7RCHViYFg1E4J_IGkS0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Peanut-Butter-Banana-Smoothie-LEAD-4_RECIRC-af849a5c756143aa88c80b727a44cbaf.jpg",
          "calories": "500",
          "description": "A creamy and filling smoothie that blends banana, peanut butter, milk, yogurt, and honey.",
          "ingredients": ["Banana", "Peanut Butter", "Milk", "Yogurt", "Honey"],
          "mealType": "snack",
          "allergies": ["Milk", "Peanuts"],
          "bmiRange": {
            "min": 0,
            "max": 18,
            "_id": "6547aa98460da3ab652b6d40"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        },
        {
          "_id": "6571331300589daedbc10543",
          "name": "Chicken and Rice Casserole",
          "image": "https://www.jocooks.com/wp-content/uploads/2018/12/chicken-broccoli-rice-casserole-1-10.jpg",
          "calories": "600",
          "description": "A hearty and comforting dish that bakes chicken, rice, cream of mushroom soup, cheese, and vegetables in one pan.",
          "ingredients": [
            "Chicken",
            "Rice",
            "Cream of Mushroom Soup",
            "Cheese",
            "Butter",
            "Onion",
            "Carrot",
            "Celery",
            "Garlic",
            "Parsley",
            "Salt",
            "Pepper"
          ],
          "mealType": "lunch",
          "allergies": ["Milk"],
          "bmiRange": {
            "min": 0,
            "max": 18,
            "_id": "6547aaa1460da3ab652b6d43"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        },
        {
          "_id": "6571331300589daedbc10545",
          "name": "Granola and Yogurt Parfait",
          "image": "https://swirlsofflavor.com/wp-content/uploads/2022/01/Fruit-Yogurt-Parfait-Horizontal-1-scaled.jpg",
          "calories": "400",
          "description": "A crunchy and creamy breakfast that layers granola, yogurt, and fresh fruits in a glass.",
          "ingredients": [
            "Granola",
            "Yogurt",
            "Strawberries",
            "Blueberries",
            "Honey"
          ],
          "mealType": "breakfast",
          "allergies": ["Milk", "Tree nuts"],
          "bmiRange": {
            "min": 0,
            "max": 18,
            "_id": "6547aaa6460da3ab652b6d46"
          },
          "createdAt": "2023-12-07T02:50:59.610Z",
          "updatedAt": "2023-12-07T02:50:59.610Z",
          "__v": 0
        }
      ]
    }
    ```
