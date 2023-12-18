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
  - Sample:
    ```json
    {
      "_id": "generatedObjectId",
      "name": "Salmon and Asparagus",
      "calories": "350"
      // ... other fields
    }
    ```

### 2. Get Food by ID

- **Method:** `GET`
- **Endpoint:** `/single/:id`
- **Description:** Get details of a food item by ID.
- **Response:**
  - Sample:
    ```json
    {
      "_id": "generatedObjectId",
      "name": "Salmon and Asparagus",
      "calories": "350"
      // ... other fields
    }
    ```

### 3. Get Food List

- **Method:** `GET`
- **Endpoint:** `/`
- **Description:** Get a paginated list of food items.
- **Query Parameters:**
  - `page` (optional): Page number (default is 1).
- **Response:**
  - Sample:
    ```json
    {
      "food": [
        {
          "_id": "generatedObjectId",
          "name": "Salmon and Asparagus",
          "calories": "350"
          // ... other fields
        }
        // ... other food items
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
      // ... other fields to update
    }
    ```
- **Response:**
  - Sample:
    ```json
    {
      "_id": "generatedObjectId",
      "name": "Salmon and Asparagus",
      "calories": "400"
      // ... other fields
    }
    ```

### 5. Delete Food by ID

- **Method:** `DELETE`
- **Endpoint:** `/delete/:id`
- **Description:** Delete a food item by ID.
- **Response:**
  - Sample:
    ```json
    {
      "_id": "generatedObjectId",
      "name": "Salmon and Asparagus"
      // ... other fields
    }
    ```

### 6. Search by Ingredient

- **Method:** `GET`
- **Endpoint:** `/search/ingredient/:ingredientName`
- **Description:** Search for foods containing a specific ingredient.
- **Response:**
  - Sample:
    ```json
    {
      "foods": [
        {
          "_id": "generatedObjectId",
          "name": "Salmon and Asparagus"
          // ... other fields
        }
        // ... other matching food items
      ]
    }
    ```

### 7. Search by BMI Range

- **Method:** `GET`
- **Endpoint:** `/search/bmi/:min/:max`
- **Description:** Search for foods within a specified BMI range.
- **Response:**
  - Sample:
    ```json
    {
      "foods": [
        {
          "_id": "generatedObjectId",
          "name": "Salmon and Asparagus"
          // ... other fields
        }
        // ... other matching food items
      ]
    }
    ```

Feel free to customize this Markdown document further based on additional details you want to include.
